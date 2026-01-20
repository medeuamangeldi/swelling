// Test script to send customer confirmation email
import { sendContactEmails } from "./lib/email";

async function testEmail() {
  try {
    console.log("🚀 Testing customer confirmation email...\n");

    const testData = {
      name: "Medeu Amangeldi",
      email: "medcod49@gmail.com",
      phone: "123-456-7890",
      message:
        "This is a test message for the welding service inquiry. I would like to get a quote for a custom metal fabrication project.",
    };

    console.log("📧 Sending email with data:");
    console.log(JSON.stringify(testData, null, 2));
    console.log("\n");

    const result = await sendContactEmails(testData);

    console.log("✅ Email sent successfully!");
    console.log("Customer Response:", result.customerResponse);
    console.log("Admin Response:", result.adminResponse);
  } catch (error) {
    console.error("❌ Error sending email:", error);
    process.exit(1);
  }
}

testEmail();
