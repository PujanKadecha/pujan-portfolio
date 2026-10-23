import { createContactMessage } from "../services/contact.service.js";
import { sendContactNotification } from "../services/email.service.js";

export async function submitContactMessage(req, res, next) {
  try {
    const contact = await createContactMessage(req.body);

    let emailSent = false;

    try{
        await sendContactNotification(req.body);
        emailSent = true;
    }catch(emailError){
        console.error("Contact Notification email failed:",emailError.message);
    }

    return res.status(201).json({
      success: true,
      message: "Your Message Submitted Successfully",
      data: contact,
      notificationSent: emailSent,
    });
  } catch (error) {
    next(error);
  }
}
