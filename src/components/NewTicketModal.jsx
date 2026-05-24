import { useState } from "react";

const priorities = ["High", "Medium", "Low"];

function NewTicketModal({ onClose, onSubmit }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    customer: "",
    priority: "Medium",
  });

  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.title.trim()) e.title = "Title is required.";
    if (!form.description.trim()) e.description = "Description is required.";
    if (!form.customer.trim()) e.customer = "Customer name is required.";
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    onSubmit(form);
  }

  // Close on backdrop click
  function handleBackdrop(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div
      onClick={handleBackdrop}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
    >
      <div className="w-full max-w-lg rounded-xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e6e8ee] px-6 py-4">
          <h2 className="text-[1.35rem] font-semibold text-[#0f2137]">
            New Ticket
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#94a3b8] transition hover:bg-gray-100 hover:text-[#0f2137]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="space-y-4 px-6 py-5">
          {/* Title */}
          <div>
            <label className="mb-1 block text-sm font-medium text-[#374151]">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Login page not loading"
              className={`w-full rounded-md border px-3 py-2.5 text-sm text-[#0f2137] outline-none transition focus:ring-2 focus:ring-[#632EE3]/40 ${errors.title ? "border-red-400 bg-red-50" : "border-[#d1d5db] bg-white focus:border-[#632EE3]"}`}
            />
            {errors.title && (
              <p className="mt-1 text-xs text-red-500">{errors.title}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="mb-1 block text-sm font-medium text-[#374151]">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe the issue in detail..."
              rows={3}
              className={`w-full resize-none rounded-md border px-3 py-2.5 text-sm text-[#0f2137] outline-none transition focus:ring-2 focus:ring-[#632EE3]/40 ${errors.description ? "border-red-400 bg-red-50" : "border-[#d1d5db] bg-white focus:border-[#632EE3]"}`}
            />
            {errors.description && (
              <p className="mt-1 text-xs text-red-500">{errors.description}</p>
            )}
          </div>

          {/* Customer */}
          <div>
            <label className="mb-1 block text-sm font-medium text-[#374151]">
              Customer Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="customer"
              value={form.customer}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className={`w-full rounded-md border px-3 py-2.5 text-sm text-[#0f2137] outline-none transition focus:ring-2 focus:ring-[#632EE3]/40 ${errors.customer ? "border-red-400 bg-red-50" : "border-[#d1d5db] bg-white focus:border-[#632EE3]"}`}
            />
            {errors.customer && (
              <p className="mt-1 text-xs text-red-500">{errors.customer}</p>
            )}
          </div>

          {/* Priority */}
          <div>
            <label className="mb-1 block text-sm font-medium text-[#374151]">
              Priority
            </label>
            <div className="flex gap-3">
              {priorities.map((p) => (
                <label
                  key={p}
                  className={`flex flex-1 cursor-pointer items-center justify-center rounded-md border py-2 text-sm font-medium transition ${
                    form.priority === p
                      ? p === "High"
                        ? "border-red-400 bg-red-50 text-red-500"
                        : p === "Medium"
                          ? "border-amber-400 bg-amber-50 text-amber-600"
                          : "border-green-400 bg-green-50 text-green-600"
                      : "border-[#d1d5db] text-[#6b7280] hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="priority"
                    value={p}
                    checked={form.priority === p}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  {p}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 border-t border-[#e6e8ee] px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-md border border-[#d1d5db] px-5 py-2 text-sm font-medium text-[#374151] transition hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="rounded-md bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] px-5 py-2 text-sm font-semibold text-white transition hover:brightness-95"
          >
            Create Ticket
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewTicketModal;
