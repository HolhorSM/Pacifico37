import { useEffect } from "react";
import { useForm } from "react-hook-form";
import supabase from "../../config/supaconfig";


export default function ContactSection() {
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      nombre: "",
      correo: "",
      telefono: "",
    },
  });


  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from("Contactos").insert([
        {
          nombre: data.nombre.trim(),
          correo: data.correo.toLowerCase(),
          telefono: data.telefono.trim(),
        },
      ]);

      if (error) throw error;
      alert("Formulario enviado con éxito ✅");
      console.log(data);
    } catch (err) {
      console.error(err.message);
      alert("Hubo un error al enviar el formulario");
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ nombre: "", correo: "", telefono: "" });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://maps.google.com/maps?width=100%&height=600&hl=es&q=Oceano+Pacífico+37,+Villas+Terrasol,+Aeropuerto,+39893+Acapulco+de+Juárez,+Gro.+(Mi%20Negocio)&ie=UTF8&t=&z=17&iwloc=B&output=embed"
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Oceano Pacífico 37, Villas Terrasol, Aeropuerto, 39893 Acapulco
                de Juárez, Gro.
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                CORREO
              </h2>
              <a
                className="text-indigo-500 leading-relaxed"
                href="mailto:example@email.com"
              >
                example@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                TELEFONO
              </h2>
              <p className="leading-relaxed">+527442584848</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contactanos
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Contáctanos para agendar una visita, recibir informes de la
            propiedad o agendar tus futuras vacaciones en Pacifico37.{" "}
          </p>
          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Nombre</label>
              <input
                type="text"
                {...register("nombre", {
                  required: "El nombre es obligatorio",
                  maxLength: { value: 50, message: "Máximo 50 caracteres" },
                  pattern: {
                    value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                    message: "El nombre solo puede contener letras y espacios",
                  },
                })}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.nombre && (
                <p className="text-red-500">{errors.nombre.message}</p>
              )}
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Correo</label>
              <input
                type="email"
                {...register("correo", {
                  required: "El correo es obligatorio",
                  maxLength: { value: 100, message: "Correo no valido" },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Formato de correo inválido",
                  },
                })}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.correo && (
                <p className="text-red-500">{errors.correo.message}</p>
              )}
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">
                Telefono (opcional)
              </label>
              <input
                type="number"
                {...register("telefono", {
                  required: false,
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Debe tener exactamente 10 dígitos",
                  },
                })}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            {errors.telefono && (
              <p className="text-red-500">
                El teléfono debe tener exactamente 10 dígitos
              </p>
            )}

          <div className="m-5">
            
          </div>
            <button
              type="submit"
              className="w-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Enviar
            </button>
          </form>
          <div className="mt-3">
            <a href="http://" target="_blank">
              <button className="w-full text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Whatsapp
              </button>
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-3">
            Tu datos estaran encriptados y seguros, solo los podra ver el
            adminstrador de la pagina.
          </p>
        </div>
      </div>
    </section>
  );
}
