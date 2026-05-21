'use strict';
// emails.js — Techofy Cloud · Clean iOS-Style Email Templates

const F  = `-apple-system,BlinkMacSystemFont,'SF Pro Display','SF Pro Text','Helvetica Neue',Helvetica,Arial,sans-serif`;
const FM = `'SF Mono','Fira Code','Courier New',monospace`;

// ─── Shell ─────────────────────────────────────────────────────────────────────
function htmlShell(inner) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<meta name="color-scheme" content="light"/>
<meta name="x-apple-disable-message-reformatting"/>
</head>
<body style="margin:0;padding:0;background:#f5f5f7;font-family:${F};-webkit-text-size-adjust:100%;">
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f5f5f7;">
<tr><td style="padding:40px 16px;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
    style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 1px 8px rgba(0,0,0,0.06);">
    ${inner}
  </table>
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;margin:0 auto;">
  <tr><td style="padding:18px 0;text-align:center;">
    <p style="margin:0;font-family:${F};font-size:11px;color:#b0b0b5;line-height:1.8;">
      © ${new Date().getFullYear()} Techofy Cloud &nbsp;·&nbsp;
      <a href="mailto:support@techofy.xyz" style="color:#b0b0b5;text-decoration:none;">support@techofy.xyz</a>
      &nbsp;·&nbsp;
      <a href="https://t.me/Techofy" style="color:#b0b0b5;text-decoration:none;">Telegram</a>
    </p>
  </td></tr>
  </table>
</td></tr>
</table>
</body>
</html>`;
}

// ─── Header ────────────────────────────────────────────────────────────────────
function header(label) {
  return `
<tr><td style="padding:28px 32px 22px;border-bottom:1px solid #f0f0f2;">
  <table cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td style="vertical-align:middle;padding-right:10px;">
        <div style="width:30px;height:30px;background:#007AFF;border-radius:8px;text-align:center;line-height:30px;">
          <span style="font-family:${F};font-size:15px;font-weight:800;color:#fff;">T</span>
        </div>
      </td>
      <td style="vertical-align:middle;">
        <p style="margin:0;font-family:${F};font-size:14px;font-weight:700;color:#1c1c1e;">Techofy Cloud</p>
        <p style="margin:0;font-family:${F};font-size:11px;color:#8e8e93;">${label}</p>
      </td>
    </tr>
  </table>
</td></tr>`;
}

// ─── Footer inside card ─────────────────────────────────────────────────────────
function footer() {
  return `
<tr><td style="padding:20px 32px;border-top:1px solid #f0f0f2;text-align:center;">
  <p style="margin:0 0 4px;font-family:${F};font-size:12px;color:#8e8e93;line-height:1.8;">
    <a href="mailto:support@techofy.xyz" style="color:#007AFF;text-decoration:none;font-weight:500;">support@techofy.xyz</a>
    &nbsp;·&nbsp;
    <a href="https://t.me/Techofy" style="color:#007AFF;text-decoration:none;font-weight:500;">Telegram Support</a>
  </p>
</td></tr>`;
}

// ─── CTA Button ────────────────────────────────────────────────────────────────
function btn(href, text, color) {
  const bg = color || '#007AFF';
  return `
<table width="100%" cellpadding="0" cellspacing="0" role="presentation">
<tr><td style="padding:4px 0;text-align:center;">
  <a href="${href}" style="display:inline-block;background:${bg};color:#ffffff;font-family:${F};font-size:15px;font-weight:600;padding:13px 36px;border-radius:980px;text-decoration:none;letter-spacing:-0.2px;">${text}</a>
</td></tr>
</table>`;
}

// ─── Table row (key-value) ──────────────────────────────────────────────────────
function row(label, value, last) {
  return `
<tr>
  <td style="padding:12px 18px;font-family:${F};font-size:13px;color:#8e8e93;white-space:nowrap;${last ? '' : 'border-bottom:1px solid #f0f0f2;'}">${label}</td>
  <td style="padding:12px 18px;font-family:${F};font-size:13px;color:#1c1c1e;text-align:right;${last ? '' : 'border-bottom:1px solid #f0f0f2;'}">${value}</td>
</tr>`;
}

// ─── 1. OTP EMAIL ───────────────────────────────────────────────────────────────
function otpEmail({ firstName, otp, expiresMin = 10 }) {
  return htmlShell(`
${header('Email Verification')}

<tr><td style="padding:32px 32px 8px;">
  <p style="margin:0 0 8px;font-family:${F};font-size:22px;font-weight:700;color:#1c1c1e;letter-spacing:-0.4px;">Verify your email</p>
  <p style="margin:0;font-family:${F};font-size:14px;color:#636366;line-height:1.65;">
    Hi <strong style="color:#1c1c1e;">${firstName}</strong>, use the one-time code below to verify your Techofy Cloud account.
  </p>
</td></tr>

<tr><td style="padding:24px 32px;text-align:center;">
  <p style="margin:0 0 12px;font-family:${F};font-size:11px;font-weight:600;letter-spacing:1.4px;color:#8e8e93;text-transform:uppercase;">One-Time Code</p>
  <p style="margin:0;font-family:${FM};font-size:48px;font-weight:700;letter-spacing:14px;color:#007AFF;text-indent:14px;">${otp}</p>
  <p style="margin:14px 0 0;font-family:${F};font-size:12px;color:#aeaeb2;">Expires in <strong>${expiresMin} minutes</strong> &nbsp;·&nbsp; Single use only</p>
</td></tr>

<tr><td style="padding:0 32px 32px;">
  <p style="margin:0;font-family:${F};font-size:13px;color:#8e8e93;line-height:1.65;text-align:center;">
    Techofy Cloud will never ask for your code via phone, chat, or email.<br/>Only enter this on our website.
  </p>
</td></tr>

${footer()}
`);
}

// ─── 2. FREE ORDER CONFIRMATION ─────────────────────────────────────────────────
function freeOrderEmail({ firstName, lastName, orderId, planType, planName, planRam, email }) {
  return htmlShell(`
${header('Order Confirmation')}

<tr><td style="padding:32px 32px 20px;">
  <p style="margin:0 0 6px;font-family:${F};font-size:22px;font-weight:700;color:#1c1c1e;letter-spacing:-0.4px;">Order Received</p>
  <p style="margin:0;font-family:${F};font-size:14px;color:#636366;line-height:1.65;">
    Hi <strong style="color:#1c1c1e;">${firstName} ${lastName}</strong>, your free ${planType} request is under review. We're verifying your YouTube subscription and will provision your server shortly.
  </p>
</td></tr>

<tr><td style="padding:0 32px 20px;">
  <p style="margin:0 0 10px;font-family:${F};font-size:11px;font-weight:600;letter-spacing:1.2px;color:#8e8e93;text-transform:uppercase;">Order Details</p>
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border:1px solid #e8e8ed;border-radius:12px;overflow:hidden;">
    ${row('Order ID',  `<span style="font-family:${FM};font-size:12px;">${orderId}</span>`)}
    ${row('Plan',      `${planType} ${planName}`)}
    ${row('RAM',       planRam)}
    ${row('Status',    `<span style="color:#ff9500;font-weight:600;">Pending Review</span>`)}
    ${row('Email',     `<span style="font-family:${FM};font-size:11.5px;">${email}</span>`, true)}
  </table>
</td></tr>

<tr><td style="padding:0 32px 20px;">
  <p style="margin:0 0 10px;font-family:${F};font-size:11px;font-weight:600;letter-spacing:1.2px;color:#8e8e93;text-transform:uppercase;">What Happens Next</p>
  <p style="margin:0 0 8px;font-family:${F};font-size:13px;color:#636366;line-height:1.7;">
    1. Our team verifies your YouTube subscription screenshot.
  </p>
  <p style="margin:0 0 8px;font-family:${F};font-size:13px;color:#636366;line-height:1.7;">
    2. Once approved, your <strong style="color:#1c1c1e;">${planRam} ${planType}</strong> server is provisioned.
  </p>
  <p style="margin:0;font-family:${F};font-size:13px;color:#636366;line-height:1.7;">
    3. Credentials are sent to this email — expected within <strong style="color:#1c1c1e;">2–12 hours</strong>.
  </p>
</td></tr>

<tr><td style="padding:0 32px 32px;">
  ${btn(`https://techofy.xyz/tracking?id=${orderId}`, 'Track Your Order')}
</td></tr>

${footer()}
`);
}

// ─── 3. PAID ORDER CONFIRMATION ─────────────────────────────────────────────────
function paidOrderEmail({ firstName, lastName, orderId, planType, planName, planPrice, planRam, email }) {
  return htmlShell(`
${header('Order Confirmation')}

<tr><td style="padding:32px 32px 20px;">
  <p style="margin:0 0 6px;font-family:${F};font-size:22px;font-weight:700;color:#1c1c1e;letter-spacing:-0.4px;">Order Received</p>
  <p style="margin:0;font-family:${F};font-size:14px;color:#636366;line-height:1.65;">
    Hi <strong style="color:#1c1c1e;">${firstName} ${lastName}</strong>, your ${planType} order is confirmed. Your server will be live once payment is received.
  </p>
</td></tr>

<tr><td style="padding:0 32px 20px;">
  <p style="margin:0 0 10px;font-family:${F};font-size:11px;font-weight:600;letter-spacing:1.2px;color:#8e8e93;text-transform:uppercase;">Order Details</p>
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border:1px solid #e8e8ed;border-radius:12px;overflow:hidden;">
    ${row('Order ID', `<span style="font-family:${FM};font-size:12px;">${orderId}</span>`)}
    ${row('Plan',     `${planType} ${planName}`)}
    ${row('RAM',      planRam)}
    ${row('Status',   `<span style="color:#ff9500;font-weight:600;">Awaiting Payment</span>`)}
    ${row('Email',    `<span style="font-family:${FM};font-size:11.5px;">${email}</span>`)}
    ${row('Price',    `<span style="font-size:15px;font-weight:700;color:#007AFF;">${planPrice}</span>`, true)}
  </table>
</td></tr>

<tr><td style="padding:0 32px 20px;">
  <p style="margin:0;font-family:${F};font-size:13px;color:#636366;line-height:1.7;">
    Payment details will be sent via a separate email shortly. After confirmation, your server will be live in <strong style="color:#1c1c1e;">2–6 hours</strong>.
    Need help? <a href="https://t.me/Techofy" style="color:#007AFF;text-decoration:none;font-weight:500;">Telegram →</a>
  </p>
</td></tr>

<tr><td style="padding:0 32px 32px;">
  ${btn(`https://techofy.xyz/tracking?id=${orderId}`, 'Track Your Order')}
</td></tr>

${footer()}
`);
}

// ─── 4. SERVER CREDENTIALS EMAIL ───────────────────────────────────────────────
function credentialsEmail({ firstName, lastName, orderId, planType, planName, planRam, ip, username, password }) {
  const connectNote = planType === 'RDP'
    ? `<p style="margin:0;font-family:${F};font-size:13px;color:#636366;line-height:1.7;">
        <strong style="color:#1c1c1e;">Windows:</strong> Win + R → type <span style="font-family:${FM};background:#f5f5f7;padding:2px 7px;border-radius:5px;font-size:12px;">mstsc</span> → enter IP → log in.<br/>
        <strong style="color:#1c1c1e;">Mac:</strong> Install <strong>Microsoft Remote Desktop</strong> from App Store and add the IP above.
      </p>`
    : `<p style="margin:0 0 10px;font-family:${F};font-size:13px;color:#636366;">Open terminal and run:</p>
       <div style="background:#1c1c1e;border-radius:10px;padding:12px 16px;">
         <span style="font-family:${FM};font-size:13px;color:#34c759;">ssh ${username}@${ip}</span>
       </div>
       <p style="margin:8px 0 0;font-family:${F};font-size:12px;color:#8e8e93;">Enter your password when prompted.</p>`;

  return htmlShell(`
${header('Server Credentials')}

<tr><td style="padding:32px 32px 20px;">
  <p style="margin:0 0 6px;font-family:${F};font-size:22px;font-weight:700;color:#1c1c1e;letter-spacing:-0.4px;">Your Server is Ready 🎉</p>
  <p style="margin:0;font-family:${F};font-size:14px;color:#636366;line-height:1.65;">
    Hi <strong style="color:#1c1c1e;">${firstName} ${lastName}</strong>, your <strong>${planRam} ${planType}</strong> server is live. Save these credentials securely and do not share them.
  </p>
</td></tr>

<tr><td style="padding:0 32px 20px;">
  <p style="margin:0 0 10px;font-family:${F};font-size:11px;font-weight:600;letter-spacing:1.2px;color:#8e8e93;text-transform:uppercase;">Access Credentials</p>
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border:1px solid #e8e8ed;border-radius:12px;overflow:hidden;">
    ${row('Order ID',   `<span style="font-family:${FM};font-size:12px;">${orderId}</span>`)}
    ${row('Plan',       `${planType} ${planName} — ${planRam}`)}
    ${row('IP Address', `<span style="font-family:${FM};font-size:16px;font-weight:700;color:#34c759;">${ip}</span>`)}
    ${row('Username',   `<span style="font-family:${FM};font-size:14px;font-weight:600;color:#1c1c1e;">${username}</span>`)}
    ${row('Password',   `<span style="font-family:${FM};font-size:14px;font-weight:600;color:#ff375f;">${password}</span>`, true)}
  </table>
</td></tr>

<tr><td style="padding:0 32px 20px;">
  <p style="margin:0 0 12px;font-family:${F};font-size:11px;font-weight:600;letter-spacing:1.2px;color:#8e8e93;text-transform:uppercase;">How to Connect</p>
  ${connectNote}
</td></tr>

<tr><td style="padding:0 32px 32px;">
  <p style="margin:0;font-family:${F};font-size:12px;color:#8e8e93;line-height:1.7;text-align:center;">
    Change your password after first login. Delete this email after saving credentials.
  </p>
</td></tr>

${footer()}
`);
}

// ─── 5. PAYMENT DETAILS EMAIL ───────────────────────────────────────────────────
function paymentEmail({ firstName, lastName, orderId, planName, planType, planPrice, amount }) {
  function cryptoRow(label, address, network) {
    return `
<tr><td style="padding:14px 18px;border-bottom:1px solid #f0f0f2;">
  <p style="margin:0 0 2px;font-family:${F};font-size:13px;font-weight:600;color:#1c1c1e;">${label}</p>
  <p style="margin:0 0 8px;font-family:${F};font-size:11px;color:#8e8e93;">${network}</p>
  <p style="margin:0;font-family:${FM};font-size:11.5px;color:#3a3a3c;word-break:break-all;line-height:1.6;">${address}</p>
</td></tr>`;
  }

  return htmlShell(`
${header('Payment Required')}

<tr><td style="padding:32px 32px 20px;">
  <p style="margin:0 0 6px;font-family:${F};font-size:22px;font-weight:700;color:#1c1c1e;letter-spacing:-0.4px;">Complete Your Payment</p>
  <p style="margin:0;font-family:${F};font-size:14px;color:#636366;line-height:1.65;">
    Hi <strong style="color:#1c1c1e;">${firstName} ${lastName}</strong>, complete your payment to activate your <strong>${planType} ${planName}</strong>. Send proof after payment — server goes live in <strong>2–6 hours</strong>.
  </p>
</td></tr>

<tr><td style="padding:0 32px 20px;">
  <p style="margin:0 0 10px;font-family:${F};font-size:11px;font-weight:600;letter-spacing:1.2px;color:#8e8e93;text-transform:uppercase;">Order Summary</p>
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border:1px solid #e8e8ed;border-radius:12px;overflow:hidden;">
    ${row('Order ID',   `<span style="font-family:${FM};font-size:12px;">${orderId}</span>`)}
    ${row('Plan',       `${planType} ${planName}`)}
    ${row('Amount Due', `<span style="font-size:16px;font-weight:700;color:#5856d6;">${amount || planPrice}</span>`, true)}
  </table>
</td></tr>

<tr><td style="padding:0 32px 20px;">
  <p style="margin:0 0 10px;font-family:${F};font-size:11px;font-weight:600;letter-spacing:1.2px;color:#8e8e93;text-transform:uppercase;">Payment Addresses</p>
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border:1px solid #e8e8ed;border-radius:12px;overflow:hidden;">
    ${cryptoRow('USDT (TRC20)',  'TWL9KeN22wEJLGN17NioUrBVmL4rrZTKFL',           'Only send Tether USDT via TRC20 network. Other assets will be lost.')}
    ${cryptoRow('USDT (BEP20)', '0x753f624Fc07eDdC735C02Fe2Aab188Dd00335d94', 'Only send Tether USD via BEP20 network. Other assets will be lost.')}
    ${cryptoRow('USDT (MATIC)', '0x753f624Fc07eDdC735C02Fe2Aab188Dd00335d94', 'Only send Tether USD via Polygon network. Other assets will be lost.')}
    <tr><td style="padding:14px 18px;">
      <p style="margin:0 0 2px;font-family:${F};font-size:13px;font-weight:600;color:#1c1c1e;">Litecoin (LTC)</p>
      <p style="margin:0 0 8px;font-family:${F};font-size:11px;color:#8e8e93;">Litecoin Network</p>
      <p style="margin:0;font-family:${FM};font-size:11.5px;color:#3a3a3c;word-break:break-all;line-height:1.6;">LcDsKMe7T6BKRWE6zn1ZpAqPVNsZ1NYSML</p>
    </td></tr>
  </table>
</td></tr>

<tr><td style="padding:0 32px 32px;">
  <p style="margin:0 0 8px;font-family:${F};font-size:11px;font-weight:600;letter-spacing:1.2px;color:#8e8e93;text-transform:uppercase;">After Payment</p>
  <p style="margin:0 0 6px;font-family:${F};font-size:13px;color:#636366;line-height:1.7;">
    1. Reply to this email with your payment screenshot and transaction hash:<br/>
    <a href="mailto:support@techofy.xyz" style="color:#007AFF;text-decoration:none;font-weight:500;">support@techofy.xyz</a>
  </p>
  <p style="margin:0 0 6px;font-family:${F};font-size:13px;color:#636366;line-height:1.7;">
    2. Or send screenshot on Telegram:
    <a href="https://t.me/Techofy" style="color:#007AFF;text-decoration:none;font-weight:500;">@Techofy</a>
  </p>
  <p style="margin:0;font-family:${F};font-size:13px;color:#636366;line-height:1.7;">
    3. Server activates within <strong style="color:#1c1c1e;">2–6 hours</strong> of confirmation.
  </p>
</td></tr>

${footer()}
`);
}

module.exports = { otpEmail, freeOrderEmail, paidOrderEmail, credentialsEmail, paymentEmail };
