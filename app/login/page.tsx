import { AuthButtonServer } from "@/app/components/AuthButtonServer"

export default function Login() {
  return (
    <section className="grid place-content-center main-h-screen">
      <h1 className="text-xl font-bold mb-4">Inicia sesión</h1>
      <AuthButtonServer/>
    </section>
  )
}
