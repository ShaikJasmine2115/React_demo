import type { Route } from "./+types/index";
import { Form } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
      { title: "Contact - Portfolio app" },
      { name: "description", content: "Custom web development" },
    ];
  }

export async function action({request}: Route.ActionArgs){
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const errors:Record<string,string> = {};

    if(!name) errors.name = "Name is required";

    if(!email) errors.email = "Email is required";
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        { errors.email = "Invalid email address";}

    if(!subject) errors.subject = "Subject is required";

    if(!message) errors.message = "Message is required";

    if(Object.keys(errors).length > 0){return {errors};}

    const data ={name, email, subject, message};
    return {message: "Message sent successfully", data};
}

const Contact = ({actionData}: Route.ComponentProps) => {
    const errors = actionData?.errors || {};
    return(
        <section className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-900">
            <h2 className="text-3xl text-white font-bold mb-2 text-center">
                Contact Page
            </h2>
            {actionData?.message ? (<p className="mb-6 bg-green-700 text-green-100 text-center rounded-lg border border-green-500 shadow-md p-4">{actionData.message}</p>) : null}
            <Form method="post" className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                    <input type="text" id="name" name="name" className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100" />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                    <input type="email" id="email" name="email" className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100" />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                    <input type="text" id="subject" name="subject" className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100" />
                    {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                    <textarea id="message" name="message" className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100" rows={4}></textarea>
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">Send Message</button>
            </Form>
        </section>
        
    )
}

export default Contact;