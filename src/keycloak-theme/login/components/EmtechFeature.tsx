import { Icon } from "./Icon";

type Props = {
    title: string
    description: string
}

export function EmtechFeature({title, description}: Props) {
    return (
        <div className="tw-grid tw-grid-cols-12 tw-mb-4">
            <div className="tw-mt-1">
                <Icon type='feature-tick' />
            </div>
            <div className="tw-col-span-11">
                <p>{title}</p>
            </div>
            <div className="tw-col-start-2 tw-col-span-11 tw-text-[#8499b1] tw-text-sm">
                {description}
            </div>
        </div>
    )
}