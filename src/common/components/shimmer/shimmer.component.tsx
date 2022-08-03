import { FC, HTMLAttributes } from "react"

const ShimmerComponent: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return <div className="shine" {...props} />
}
export default ShimmerComponent
