import emtechLogo from './assets/emtech-logo.svg'
import fspPublicPageGraphic from './assets/fsp-public-page-graphic.svg'
import { EmtechFeature } from './components/EmtechFeature'

type Props = {
    children: JSX.Element
}


export function LoginLayout({children}: Props) {
    return <div className="tw-h-full tw-flex tw-w-full">
        <div className="tw-w-5/12 tw-bg-[#1e252d] tw-h-full tw-p-8 tw-flex tw-flex-col">
            <div>
                <img src={emtechLogo} alt='emtech logo' />
            </div>
            <div className='tw-h-full tw-flex tw-flex-col tw-justify-around'>
                <div className='tw-flex tw-flex-col'>
                    <div className="tw-mb-3">
                        <img src={fspPublicPageGraphic} alt="fsp page graphic" className="tw-mx-auto" />
                    </div>
                    <p className='tw-text-2xl tw-mb-6'>Get Powered by E<span className='tw-text-[#C0933E]'>M</span>TECH:</p>
                    <EmtechFeature
                        title='All In One' 
                        description='Use our all-in-one platform for pre-regulatory readiness, licensing applications, and data reporting management' />
                    <EmtechFeature 
                        title='Digital Compliance Regulation' 
                        description='Access our pre-built Regulatory Sandbox APIs for Sandboxing and Compliance Reporting' />
                    <EmtechFeature 
                        title='Digital Cash' 
                        description='Access our pre-built CBDC APIs to drive Financial Inclusion' />
                    <div className="tw-flex tw-text-sm tw-mb-1">
                        <p className="tw-mr-2">Have Questions?</p>
                        <a 
                            href="https://futuremtech.atlassian.net/servicedesk/customer/portal/3" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="tw-text-[#C0933E]">Visit our Support Center</a>
                    </div>
                    <div className="tw-flex tw-text-sm">
                        <p className="tw-mr-2">Are You a Central Bank or other Regulator?</p>
                        <a 
                            href="https://emtech.com/request-a-demo/" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="tw-text-[#C0933E]">Contact Sales</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="tw-flex-grow tw-bg-[#202b36] tw-h-full tw-p-8 tw-flex tw-flex-col">
            <div className="tw-flex tw-align-middle tw-justify-end">
                <p>Don’t have an account? <a href="/" className="tw-text-[#C0933E]">Sign Up For Free</a></p>
            </div>
            <div className="tw-h-full tw-flex tw-flex-col tw-justify-around">
                <div className="tw-w-4/12 tw-mx-auto">
                    <p className="tw-text-[2rem] tw-mb-3">Sign In</p>
                    <p className="tw-mb-8">Sign In to manage your account</p>
                    {children}
                    {/* <FloatingInput
                        id="usernameOrEmail"
                        labelText="Username or email"
                        name="usernameOrEmail"
                        className="tw-mb-8" 
                        type="text" 
                        autoFocus={true}
                        autoComplete="off" />
                    <FloatingInput
                        id="password"
                        labelText="Password" 
                        name="password"
                        className="tw-mb-12" 
                        type="password" 
                        autoFocus={true}
                        autoComplete="off"/>
                    <Button /> */}
                </div>
                {/* {children} */}
            </div>
        </div>
    </div>
}