import emailjs from "@emailjs/nodejs";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendContactEmails(formData: ContactFormData) {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
  const customerTemplateId = process.env
    .NEXT_PUBLIC_EMAILJS_REQUEST_RECEIVED_TO_CUSTOMER_TEMPLATE_ID as string;
  const adminTemplateId = process.env
    .NEXT_PUBLIC_EMAILJS_REQUEST_RECEIVED_TO_ADMIN_TEMPLATE_ID as string;

  // Validate environment variables
  if (!publicKey) {
    throw new Error("Missing NEXT_PUBLIC_EMAILJS_USER_ID in .env");
  }
  if (!serviceId) {
    throw new Error("Missing NEXT_PUBLIC_EMAILJS_SERVICE_ID in .env");
  }
  if (!customerTemplateId) {
    throw new Error(
      "Missing NEXT_PUBLIC_EMAILJS_REQUEST_RECEIVED_TO_CUSTOMER_TEMPLATE_ID in .env",
    );
  }
  if (!adminTemplateId) {
    throw new Error(
      "Missing NEXT_PUBLIC_EMAILJS_REQUEST_RECEIVED_TO_ADMIN_TEMPLATE_ID in .env",
    );
  }

  console.log("📧 EmailJS Configuration:");
  console.log("- Public Key:", publicKey);
  console.log("- Private Key:", privateKey ? "✓ Set" : "✗ Missing");
  console.log("- Service ID:", serviceId);
  console.log("- Customer Template:", customerTemplateId);
  console.log("- Admin Template:", adminTemplateId);

  // Initialize EmailJS
  emailjs.init({
    publicKey,
    privateKey,
  });

  try {
    // Send confirmation email to customer
    const customerTemplateParams = {
      to_name: formData.name,
      to_email: formData.email,
      customer_name: formData.name,
      customer_email: formData.email,
      customer_phone: formData.phone || "Not provided",
      message: formData.message,
      company_name: "O&S Welding Fabrication LLC",
      company_phone: "773-815-2391",
      company_email: "os.welders@gmail.com",
      company_website: "www.oswelders.com",
    };

    const customerResponse = await emailjs.send(
      serviceId,
      customerTemplateId,
      customerTemplateParams,
    );

    console.log("✅ Customer email sent:", customerResponse);

    // Send notification email to admin
    const adminTemplateParams = {
      to_email: "os.welders@gmail.com", // Admin email
      company_name: "O&S Welding Fabrication LLC",
      company_phone: "773-815-2391",
      company_email: "os.welders@gmail.com",
      company_website: "www.oswelders.com",
      customer_name: formData.name,
      customer_email: formData.email,
      customer_phone: formData.phone || "Not provided",
      message: formData.message,
      submission_date: new Date().toLocaleString("en-US", {
        dateStyle: "full",
        timeStyle: "short",
      }),
    };

    const adminResponse = await emailjs.send(
      serviceId,
      adminTemplateId,
      adminTemplateParams,
    );

    console.log("✅ Admin email sent:", adminResponse);

    return {
      success: true,
      customerResponse,
      adminResponse,
    };
  } catch (error) {
    console.error("Failed to send emails:", error);
    throw new Error("Failed to send contact emails");
  }
}
