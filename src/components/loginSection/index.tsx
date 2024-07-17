import { Button } from '../ui/button'
import { Input } from '../ui/input'
export const LoginSection = () => {
  return (
    <div className="absolute left-1/2  top-1/2 flex -translate-x-1/2 -translate-y-1/2">
      <section className="border p-4 text-center">
        <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">Create an account</h2>
        <p className="my-4 text-sm">Enter your email below to create your account</p>
        <form className="my-2 flex flex-col gap-2">
          <Input placeholder="Email" />
          <Button color="primary" className="my-2 border " type="submit">
            Sign in with email
          </Button>
        </form>
        <div className="relative m-2">
          <div className="absolute left-0 top-1/2 z-0 w-full border"></div>
          <p className="bg- relative z-10 inline-block bg-background p-2 text-center">or sign in with</p>
        </div>

        <Button className="m-2 border">Google</Button>
        <Button className="m-2 border">Github</Button>
      </section>
    </div>
  )
}
