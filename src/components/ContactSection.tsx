import Link from 'next/link';
import { Button } from './core/Button';
import Container from './core/Container';
import { FadeIn } from './motion/FadeIn';
import { SocialMedia } from './SocialMedia';

function TextInput({}) {
  return <div></div>;
}

// function TextInput({
//   label,
//   ...props
// }: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
//   let id = useId()

//   return (
//     <div className="group relative z-0 transition-all focus-within:z-10">
//       <input
//         type="text"
//         id={id}
//         {...props}
//         placeholder=" "
//         className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
//       />
//       <label
//         htmlFor={id}
//         className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
//       >
//         {label}
//       </label>
//     </div>
//   )
// }

// function RadioInput({
//   label,
//   ...props
// }: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
//   return (
//     <label className="flex gap-x-3">
//       <input
//         type="radio"
//         {...props}
//         className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
//       />
//       <span className="text-base/6 text-neutral-950">{label}</span>
//     </label>
//   )
// }

// function ContactForm() {
//   return (
//     <FadeIn className="lg:order-last">
//       <form>
//         <h2 className="font-display text-base font-semibold text-neutral-950">
//           Work inquiries
//         </h2>
//         <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
//           <TextInput label="Name" name="name" autoComplete="name" />
//           <TextInput
//             label="Email"
//             type="email"
//             name="email"
//             autoComplete="email"
//           />
//           <TextInput
//             label="Company"
//             name="company"
//             autoComplete="organization"
//           />
//           <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
//           <TextInput label="Message" name="message" />
//           <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
//             <fieldset>
//               <legend className="text-base/6 text-neutral-500">Budget</legend>
//               <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
//                 <RadioInput label="$25K – $50K" name="budget" value="25" />
//                 <RadioInput label="$50K – $100K" name="budget" value="50" />
//                 <RadioInput label="$100K – $150K" name="budget" value="100" />
//                 <RadioInput label="More than $150K" name="budget" value="150" />
//               </div>
//             </fieldset>
//           </div>
//         </div>
//         <Button type="submit" className="mt-10">
//           Let’s work together
//         </Button>
//       </form>
//     </FadeIn>
//   )
// }

{
  /* <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Our offices
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Prefer doing things in person? We don’t but we have to list our
        addresses here for legal reasons.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Careers', 'careers@studioagency.com'],
            ['Press', 'press@studioagency.com'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn> */
}

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl border border-neutral-600 px-6 py-10 sm:mx-0 sm:py-16 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-neutral-950 [text-wrap:balance] sm:text-4xl">
              Contact
            </h2>
            {/* <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
              {[
                ['Careers', 'careers@studioagency.com'],
                ['Press', 'press@studioagency.com'],
              ].map(([label, email]) => (
                <div key={email}>
                  <dt className="font-semibold text-neutral-950">{label}</dt>
                  <dd>
                    <Link
                      href={`mailto:${email}`}
                      className="text-neutral-600 hover:text-neutral-950"
                    >
                      {email}
                    </Link>
                  </dd>
                </div>
              ))}
            </dl> */}
            <dl className="mt-6 grid grid-cols-1 gap-8 text-lg sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-neutral-950">Email</dt>
                <dd>
                  <Link
                    href={`mailto:ponomoly.dev@gmail.com`}
                    className="text-neutral-600 hover:text-neutral-950"
                  >
                    ponomoly.dev@gmail.com
                  </Link>
                </dd>
              </div>
              <div>
                <div className="font-semibold text-neutral-950">Other</div>
                <div>
                  <SocialMedia />
                </div>
              </div>
            </dl>
            <div className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2"></div>

            {/* <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Our offices
              </h3>
               <Offices
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div> */}
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}
