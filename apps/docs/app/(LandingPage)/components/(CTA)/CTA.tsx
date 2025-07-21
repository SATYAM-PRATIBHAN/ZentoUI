import { 
  BottomText, 
  Heading,
  InteractButtons 
} from "./components"

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 px-6 mx-8 md:mx-12 lg:mx-24 text-center rounded-3xl bg-[url('/CTABackground.png')] bg-center bg-cover">
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />
      <div className="relative px-8 py-16 text-center">
        <Heading />
        <InteractButtons />
        <BottomText/>
      </div>
    </section>
  )
}
