import React from "react"

import * as icons from "react-icons/fa"

export default function DynamicFAIcon({ ...props }) {
  const Icon = icons[props.name]

  return <Icon {...props} />
}
