import { useForm } from "react-hook-form"
import emailSending from "./emailSending";

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = data => {
        console.log("Se subieron los datos", data)
        // emailSending(data)
    };

    const inputCls = "md:rounded-t dark:bg-dark-header-background bg-slate-300 block w-full p-1"
    const errorCls = "md:rounded-b dark:bg-red-700 bg-red-500 transition-all opacity-0"
    const labelCls = "mt-2"

    return (
        <form onSubmit={handleSubmit(data => onSubmit(data))} className="flex flex-col w-full m-auto md:w-1/2">

            <div className="form-group">
                <label htmlFor="name" className={labelCls}>
                    Nombre - Empresa
                </label>
                <input
                    {...register("name", {
                        required: "Este campo es requerido",
                        maxLength: {
                            value: 40,
                            message: "El nombre debe tener menos de 40 caracteres"
                        },
                    })}
                    type="text"
                    id="name"
                    className={`${inputCls} ${errors.name?.message ? "" : "md:rounded-b"} mt-0`}
                />
                <p className={`${errorCls} ${errors.name?.message ? "opacity-100 p-1" : ""}`}>{errors.name?.message}</p>
            </div>

            <div className="form-group">
                <label htmlFor="phone" className={labelCls}>
                    Teléfono
                </label>
                <input
                    {...register("phone", {
                        required: "Este campo es requerido",
                    })}
                    type="number"
                    id="phone"
                    className={`${inputCls} ${errors.phone?.message ? "" : "md:rounded-b"}`}
                />
                <p className={`${errorCls} ${errors.phone?.message ? "opacity-100 p-1" : ""}`}>{errors.phone?.message}</p>
            </div>

            <div className="form-group">
                <label htmlFor="email" className={labelCls}>
                    Email
                </label>
                <input
                    {...register("email", {
                        required: "Este campo es requerido"
                    })}
                    type="email"
                    id="email"
                    className={`${inputCls} ${errors.email?.message ? "" : "md:rounded-b"}`}
                />
                <p className={`${errorCls} ${errors.email?.message ? "opacity-100 p-1" : ""}`}>{errors.email?.message}</p>
            </div>

            <div className="form-group">
                <label htmlFor="message" className={labelCls}>
                    Consulta
                </label>
                <textarea
                    {...register("message", {
                        required: "Este campo es requerido",
                    })}
                    id="message"
                    className={`${inputCls} ${errors.message?.message ? "" : "md:rounded-b"} resize-none`}
                />
                <p className={`${errorCls} ${errors.message?.message ? "opacity-100 p-1" : ""}`}>{errors.message?.message}</p>
            </div>

            <button className="dark:bg-black bg-blue-700 text-white mt-2 p-2" type="submit">
                Enviar
            </button>

        </form>

    )
}