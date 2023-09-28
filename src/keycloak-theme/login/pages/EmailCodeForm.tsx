import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";

export default function EmailCodeForm(props: PageProps<Extract<KcContext, { pageId: "email-code-form.ftl"; }>, I18n>) {

    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const {url} = kcContext

    const {msgStr} = i18n

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss, classes }}
            headerNode={<>Header <i>EmailCodeForm</i></>}
            infoNode={<span>footer</span>}
        >
            <form action={url.loginAction} id="kc-u2f-login-form" method="post">
                <div>
                    <label htmlFor="emailCode">Access Code</label>
                    <input id="emailCode" name="emailCode" type="text" inputMode="numeric" pattern="[0-9]*"/>
                </div>
                <input type="submit" value={msgStr("doSubmit")} />
                <input type="submit" name="resend" value={msgStr("resendCode")} />
                <input type="submit" name="cancel" value={msgStr("doCancel")} />
            </form>
        </Template>
    );

}
