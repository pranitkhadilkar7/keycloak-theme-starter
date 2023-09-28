type Props = {
    type: string
}

export function Icon({type}: Props) {
    switch(type) {
        case 'feature-tick' : 
            return (
            <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                 <circle cx="8" cy="8" r="8" fill="#C0933E" />
                <path
                    d="M12 5L6.5 10.5L4 8"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
          </svg>
            )
        
        default:
            return <></>
    }
}