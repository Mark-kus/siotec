import { useForm } from "react-hook-form"
import emailSending from "./emailSending";

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = data => {
        console.log("Se subieron los datos", data)
        // emailSending(data)
    };

    const inputCls = "rounded-t bg-slate-300 block w-full p-1"
    const errorCls = "rounded-b bg-red-500 transition-all opacity-0"
    const labelCls = "mt-2"

    return (
        <form onSubmit={handleSubmit(data => onSubmit(data))} className="flex flex-col m-auto w-1/2">

            <label className={labelCls}>
                Nombre - Empresa
                <input {...register("name", {
                    required: "Este campo es requerido",
                    maxLength: {
                        value: 40,
                        message: "El nombre debe tener menos de 40 caracteres"
                    },
                })} type="text"
                    className={`${inputCls} ${errors.name?.message ? "" : "rounded-b"} mt-0`} />
            </label>
            <p className={`${errorCls} ${errors.name?.message ? "opacity-100 p-1" : ""}`}>{errors.name?.message}</p>

            <label className={labelCls}>
                Teléfono
                <input {...register("phone", {
                    required: "Este campo es requerido",
                })} type="number"
                    className={`${inputCls} ${errors.phone?.message ? "" : "rounded-b"}`} />
            </label>
            <p className={`${errorCls} ${errors.phone?.message ? "opacity-100 p-1" : ""}`}>{errors.phone?.message}</p>

            <label className={labelCls}>
                Email
                <input {...register("email", {
                    required: "Este campo es requerido"
                })} type="email"
                    className={`${inputCls} ${errors.email?.message ? "" : "rounded-b"}`} />
            </label>
            <p className={`${errorCls} ${errors.email?.message ? "opacity-100 p-1" : ""}`}>{errors.email?.message}</p>

            <label className={labelCls}>
                Consulta
                <textarea {...register("message", {
                    required: "Este campo es requerido",
                })} type="text"
                    className={`${inputCls} ${errors.message?.message ? "" : "rounded-b"} resize-none`} />
            </label>
            <p className={`${errorCls} ${errors.message?.message ? "opacity-100 p-1" : ""}`}>{errors.message?.message}</p>

            <button className="bg-black text-white mt-2 p-2">
                Enviar
            </button>

        </form>
    )
}