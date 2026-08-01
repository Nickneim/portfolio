"use client";

import { useTranslations } from "next-intl";
import { sendContactInformation, State } from "@/app/lib/actions";
import { useActionState } from "react";
import clsx from "clsx";


function Submit({ messageSent, isPending } : { messageSent: boolean, isPending: boolean}) {
  const t = useTranslations("ContactForm");
  return (
    <button
      className={
        clsx("border mt-2 font-medium py-2.5 px-5 rounded-lg w-full border-black dark:border-white",
        {
          "bg-green-500 dark:bg-green-600 transition-colors duration-250" : messageSent,
          "disabled:bg-neutral-200 dark:disabled:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800": !messageSent,
        })
      }
      type="submit"
      disabled={messageSent || isPending}
    >
        {messageSent? t("sent") : t("send")}
    </button>
  );
}


export default function ContactForm() {
  const initialState: State = { message: null, errors: {}, success: false };
  const [state, formAction, isPending] = useActionState(sendContactInformation, initialState)
  const t = useTranslations("ContactForm")
  
  const messageSent = state.success === true

  return (
    <form action={formAction}>
      <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium"
      >
        {t('name')}
      </label>
      <input
        id="name"
        type="text"
        name="name"
        className="border border-black text-sm rounded-lg block w-full p-2.5"
        placeholder={t("name-placeholder")}
        defaultValue=""
        aria-describedby="name-error"
        disabled={messageSent}
      />
      <div id="name-error" aria-live="polite" aria-atomic="true">
        {state.errors?.name &&
          state.errors.name.map((error: string) => (
            <p className="mt-1 text-sm text-red-500" key={error}>
              {t(error)}
            </p>
          ))}
      </div>
      <label
          htmlFor="email"
          className="block mt-2 mb-2 text-sm font-medium"
      >
        {t('email')}
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="border border-black text-sm rounded-lg block w-full p-2.5"
        placeholder={t("email-placeholder")}
        defaultValue=""
        aria-describedby="email-error"
        disabled={messageSent}
      />
      <div id="email-error" aria-live="polite" aria-atomic="true">
        {state.errors?.email &&
          state.errors.email.map((error: string) => (
            <p className="mt-1 text-sm text-red-500" key={error}>
              {t(error)}
            </p>
          ))}
      </div>
      <label
          htmlFor="message"
          className="block mt-2 mb-2 text-sm font-medium"
      >
        {t('message')}
      </label>
      <textarea
        id="message"
        name="message"
        className="border min-h-24 border-black text-sm rounded-lg block w-full p-2.5"
        placeholder={t("message-placeholder")}
        defaultValue=""
        aria-describedby="message-error"
        disabled={messageSent || isPending}
      />
      <div id="message-error" aria-live="polite" aria-atomic="true">
        {state.errors?.message &&
          state.errors.message.map((error: string) => (
            <p className="mt-1 text-sm text-red-500" key={error}>
              {t(error)}
            </p>
          ))}
      </div>
      <Submit messageSent={messageSent} isPending={isPending} />
      <div id="emailjs-error" aria-live="polite" aria-atomic="true">
        {state.errors?.emailjs &&
          <p className="mt-1 text-sm text-red-500" key={state.errors.emailjs}>
            {t(state.errors.emailjs)}
          </p>
        }
      </div>
    </form>
    )

};