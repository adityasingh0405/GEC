/**
 * Form components — accessible, labeled, validated
 */

export function FormInput({
  label,
  id,
  type = 'text',
  required = false,
  error,
  className = '',
  ...props
}) {
  const errorId = error ? `${id}-error` : undefined
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-sm font-semibold text-[#1A1A2E]">
        {label}
        {required && <span className="text-[#C0392B] ml-0.5" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        aria-required={required}
        aria-describedby={errorId}
        aria-invalid={error ? 'true' : undefined}
        className={`w-full px-4 py-3 rounded-sm border text-sm text-[#1A1A2E] placeholder-[#9BA8B4] bg-white
          focus:outline-none focus:ring-1 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors
          ${error ? 'border-[#C0392B] bg-red-50' : 'border-[#DDE3EC] hover:border-[#2A5284]'}`}
        {...props}
      />
      {error && (
        <p id={errorId} role="alert" className="text-xs text-[#C0392B] font-medium">
          {error}
        </p>
      )}
    </div>
  )
}

export function FormTextarea({
  label,
  id,
  required = false,
  error,
  rows = 5,
  className = '',
  ...props
}) {
  const errorId = error ? `${id}-error` : undefined
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-sm font-semibold text-[#1A1A2E]">
        {label}
        {required && <span className="text-[#C0392B] ml-0.5" aria-hidden="true">*</span>}
      </label>
      <textarea
        id={id}
        required={required}
        rows={rows}
        aria-required={required}
        aria-describedby={errorId}
        aria-invalid={error ? 'true' : undefined}
        className={`w-full px-4 py-3 rounded-sm border text-sm text-[#1A1A2E] placeholder-[#9BA8B4] bg-white resize-y
          focus:outline-none focus:ring-1 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors
          ${error ? 'border-[#C0392B] bg-red-50' : 'border-[#DDE3EC] hover:border-[#2A5284]'}`}
        {...props}
      />
      {error && (
        <p id={errorId} role="alert" className="text-xs text-[#C0392B] font-medium">
          {error}
        </p>
      )}
    </div>
  )
}

export function FormSelect({
  label,
  id,
  required = false,
  error,
  options = [],
  placeholder = 'Select an option',
  className = '',
  ...props
}) {
  const errorId = error ? `${id}-error` : undefined
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-sm font-semibold text-[#1A1A2E]">
        {label}
        {required && <span className="text-[#C0392B] ml-0.5" aria-hidden="true">*</span>}
      </label>
      <select
        id={id}
        required={required}
        aria-required={required}
        aria-describedby={errorId}
        aria-invalid={error ? 'true' : undefined}
        className={`w-full px-4 py-3 rounded-sm border text-sm text-[#1A1A2E] bg-white appearance-none
          focus:outline-none focus:ring-1 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors
          ${error ? 'border-[#C0392B] bg-red-50' : 'border-[#DDE3EC] hover:border-[#2A5284]'}`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      {error && (
        <p id={errorId} role="alert" className="text-xs text-[#C0392B] font-medium">
          {error}
        </p>
      )}
    </div>
  )
}
