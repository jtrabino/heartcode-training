'use client'

import * as Clerk from '@clerk/elements/common';
import * as SignIn from '@clerk/elements/sign-in';

export default function Page() {
  return(
    <div className="grid w-full flex-grow items-center px-4 sm:justify-center mt-24">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="relative isolate w-full space-y-8 rounded-2xl bg-zinc-800 px-4 py-10 shadow-2xl ring-1 ring-inset ring-black/70 before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-black/50 sm:w-96 sm:px-8"
        >
          <header className="text-center">
            <h1 className="text-xl font-[550] tracking-tight text-white">sign in pls</h1>
          </header>
          <Clerk.GlobalError className="block text-sm text-rose-400" />
          <Clerk.Field name="identifier" className='group/field relative'>
            <Clerk.Label className="absolute left-2 top-0 -translate-y-1/2 bg-zinc-800 px-2 font-mono text-xs/4 text-white before:absolute before:inset-0 before:-z-10 before:bg-black/50 group-focus-within/field:text-sky-300 group-data-[invalid]/field:text-rose-400">
              Email Address
            </Clerk.Label>
            <Clerk.Input
              type='text'
              required
              className="w-full rounded-lg bg-transparent px-4 py-2.5 text-sm text-white outline-none ring-1 ring-inset ring-white/20 hover:ring-white/30 focus:shadow-[0_0_6px_0] focus:shadow-sky-500/20 focus:ring-[1.5px] focus:ring-sky-300 data-[invalid]:shadow-rose-400/20 data-[invalid]:ring-rose-400">
            </Clerk.Input>
            <Clerk.FieldError className="mt-2 block text-xs text-rose-400" />
          </Clerk.Field>
          <Clerk.Field name="password" className="group/field relative">
            <Clerk.Label className="absolute left-2 top-0 -translate-y-1/2 bg-zinc-800 px-2 font-mono text-xs/4 text-white before:absolute before:inset-0 before:-z-10 before:bg-black/50 group-focus-within/field:text-sky-300 group-data-[invalid]/field:text-rose-400">
              Password
            </Clerk.Label>
            <Clerk.Input
              type="password"
              required
              className="w-full rounded-lg bg-transparent px-4 py-2.5 text-sm text-white outline-none ring-1 ring-inset ring-white/20 hover:ring-white/30 focus:shadow-[0_0_6px_0] focus:shadow-sky-500/20 focus:ring-[1.5px] focus:ring-sky-300 data-[invalid]:shadow-rose-400/20 data-[invalid]:ring-rose-400"
            />
            <Clerk.FieldError className="mt-2 block text-xs text-rose-400" />
          </Clerk.Field>
          <SignIn.Action
            submit
            className="w-full rounded-md bg-sky-600 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none hover:bg-sky-500 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
          >
            Sign in
          </SignIn.Action>
          <p className="text-center text-sm text-white/60">
            No account?{' '}
            <a
              href="/sign-up"
              className="text-white decoration-white/30 underline-offset-4 outline-none hover:underline focus-visible:underline"
            >
              Create an account
            </a>
          </p>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  )
}