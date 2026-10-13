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
    ? "min-w-0 flex-1 rounded-full bg-[#f1f4f8] px-5 py-4 text-[15px] text-[#31415a] outline-none placeholder:text-[#65748b] focus:ring-2 focus:ring-[#acd3f5]"
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
