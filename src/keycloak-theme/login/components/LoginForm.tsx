import "../KcApp.css"

export function LoginForm() {
    return (
      <div className="tw-flex tw-flex-col tw-gap-6">
      <div className="tw-relative tw-h-11 tw-w-full">
        <input
          className="tw-peer tw-h-full tw-w-full tw-border-b tw-border-[#859aaf] tw-bg-transparent tw-pt-4 tw-pb-[0.375rem] tw-text-sm tw-font-normal 
            tw-text-[#FFF] tw-outline tw-outline-0 tw-transition-all placeholder-shown:tw-border-[#859aaf] focus:tw-border-[#FFF] 
            focus:tw-outline-0 disabled:tw-border-0 disabled:tw-bg-gray-50"
          placeholder=""
        />
        <label className="after:content[' '] tw-pointer-events-none tw-absolute tw-left-0 tw-top-[-0.375rem] tw-flex tw-h-full 
        tw-w-full tw-select-none tw-text-xs tw-leading-tight tw-text-[#FFF] tw-transition-all 
        after:tw-absolute after:tw-bottom-[-0.375rem] after:tw-block after:tw-w-full 
        after:tw-scale-x-0 after:tw-border-b-2 after:tw-border-[#859aaf] after:tw-transition-transform after:tw-duration-300 
        peer-placeholder-shown:tw-text-sm peer-placeholder-shown:tw-leading-[3.5rem] peer-placeholder-shown:tw-text-[#859aaf]
        peer-focus:tw-text-xs peer-focus:tw-leading-tight peer-focus:tw-text-[#FFF] peer-focus:after:tw-scale-x-100 
        peer-focus:after:tw-border-[#FFF] peer-disabled:tw-text-transparent peer-disabled:peer-placeholder-shown:tw-text-blue-500">
          Standard
        </label>
      </div>
    </div>
    )
}