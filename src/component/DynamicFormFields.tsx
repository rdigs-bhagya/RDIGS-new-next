"use client";

import { useEffect, useState } from "react";

export type FormField = {
  key: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  placeholder: string;
  required: boolean;
  options?: string[];
};

export type WebsiteFormName = "contact" | "caseStudy" | "mediaDeck";

const apiBaseUrl = (
  process.env.NEXT_PUBLIC_API_URL ||
  "https://0cecifp2q1.execute-api.us-east-1.amazonaws.com"
).replace(/\/$/, "");

export function useFormFields(formName: WebsiteFormName) {
  const [fields, setFields] = useState<FormField[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadFields() {
      try {
        const response = await fetch(`${apiBaseUrl}/forms/config`, {
          signal: controller.signal,
          cache: "no-store",
        });
        if (!response.ok) throw new Error(`Unable to load form fields (${response.status}).`);
        const result = await response.json() as { forms?: Record<WebsiteFormName, FormField[]> };
        const configuredFields = result.forms?.[formName];
        if (!Array.isArray(configuredFields)) throw new Error("The form configuration was invalid.");
        setFields(configuredFields);
        setError("");
      } catch (requestError) {
        if (controller.signal.aborted) return;
        setError(requestError instanceof Error ? requestError.message : "Unable to load form fields.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    void loadFields();
    return () => controller.abort();
  }, [formName]);

  return { fields, loading, error };
}

export function DynamicFormFields({
  fields,
  disabled = false,
  variant = "contact",
}: {
  fields: FormField[];
  disabled?: boolean;
  variant?: "contact" | "pill" | "caseStudy";
}) {
  const inputClassName = variant === "pill"
    ? "min-w-0 flex-1 bg-transparent px-1 py-3 text-[15px] text-[#31415a] outline-none placeholder:text-[#65748b] focus:ring-0"
    : variant === "caseStudy"
      ? "mt-1 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#31415a] outline-none focus:border-[#3099d5] focus:ring-2 focus:ring-[#3099d5]/20"
      : "peer block w-full appearance-none rounded-md border-0 bg-gray-100 px-4 py-3 text-[#31415a] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3099D5]";

  return (
    <>
      {fields.map((field) => {
        const common = {
          id: field.key,
          name: field.key,
          required: field.required,
          disabled,
          maxLength: 2000,
          placeholder: field.placeholder || field.label,
          className: inputClassName,
        };
        return (
          <label
            key={field.key}
            htmlFor={field.key}
            className={variant === "pill"
              ? "block"
              : variant === "caseStudy"
                ? "block text-sm font-medium text-[#31415a]"
                : field.type === "textarea"
                  ? "block md:col-span-2"
                  : "block"}
          >
            {variant !== "pill" && <span className="mb-1 block text-sm font-medium text-[#31415a]">{field.label}</span>}
            {field.type === "textarea" ? (
              <textarea {...common} rows={5} />
            ) : field.type === "select" ? (
              <select {...common} defaultValue="">
                <option value="" disabled>{field.placeholder || `Select ${field.label}`}</option>
                {(field.options || []).map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            ) : variant === "pill" ? (
              <span className="flex h-[52px] items-center gap-2 rounded-full bg-[#f1f4f8] px-5 focus-within:ring-2 focus-within:ring-[#acd3f5]">
                <input {...common} type={field.type} autoComplete={field.key === "fullName" ? "name" : field.key} />
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-[#3099d5]">
                  {field.type === "email" ? (
                    <path d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.25L22 6.4V6a2 2 0 0 0-2-2Zm2 4.75-9.47 5.92a1 1 0 0 1-1.06 0L2 8.75V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.75Z" />
                  ) : field.type === "tel" ? (
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.56 3.57.56.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.19 2.45.56 3.57a1 1 0 0 1-.25 1.02l-2.19 2.2Z" />
                  ) : (
                    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
                  )}
                </svg>
              </span>
            ) : (
              <input {...common} type={field.type} autoComplete={field.key === "fullName" ? "name" : field.key} />
            )}
            {variant === "pill" && <span className="sr-only">{field.label}</span>}
          </label>
        );
      })}
    </>
  );
}
