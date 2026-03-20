import Contact from "../model/contact.model.js";

export const sendMessage = async (req, res) => {
  try {
    await Contact.create(req.body);
    res.status(201).json({ message: "Message sent" });
  } catch {
    res.status(500).json({ message: "Error" });
  }
};
