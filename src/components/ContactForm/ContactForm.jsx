import { useForm } from "react-hook-form"
import emailSending from "./emailSending";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";

import 'react-toastify/dist/ReactToastify.min.css';

export default function ContactForm() {
    const [sending, setSending] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = async (data) => {
        setSending(true)
        toast.promise(
            emailSending(data),
            {
                pending: {
                    render() {
                        return "Estamos enviando tu mail"
                    },
                },
                success: {
                    render() {
                        reset()
                        setSending(false)
                        return `Gracias! Ya enviamos tu mail`
                    },
                },
                error: {
                    render() {
                        setSending(false)
                        return "Ocurrió un error inesperado"
                    },
                }
            }
        )
    };

    const inputCls = "md:rounded-t dark:bg-dark-input bg-light-input block w-full p-1"
    const errorCls = "md:rounded-b dark:bg-dark-error bg-light-error text-white text-xs transition-all opacity-0 mb-2"
    const labelCls = ""

    return (
        <form onSubmit={handleSubmit(data => onSubmit(data))} className="flex flex-col">
            <ToastContainer />
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

            <button disabled={sending} className={`bg-blue-700 text-white mt-2 p-2 ${sending ? "bg-blue-900" : ""}`} type="submit">
                Enviar
            </button>

        </form>

    )
}