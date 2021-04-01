import { ReactElement } from 'react'
import { ReactComponentLike } from 'prop-types'

type Meta = {
  parent: { [key: string]: any }
  path: string[]
  document: { [key: string]: any }
}

type CustomRuleCallback = (
  field: any,
  meta: Meta
) => true | string | Promise<true | string>

export type Rule = {
  required: () => Rule
  custom: (cb: CustomRuleCallback) => Rule
  min: (min: number) => Rule
  max: (max: number) => Rule
  length: (exactLength: number) => Rule
  greaterThan: (gt: number) => Rule
  uri: (options: { scheme: string[] }) => Rule
}

type Validation = (rule: Rule) => Rule

type CommonFieldProps = {
  name: string
  type: string
  title?: string
  fieldset?: string
  validation?: Validation
  description?: string
  hidden?: boolean
  readOnly?: boolean
  options?: {
    // is only available on fields within an image
    isHighlighted?: boolean
  }
  // is only available for elements of which include a block
  icon?: ReactComponentLike
}

export type StringField = CommonFieldProps & {
  options?: {
    list: { title: string; value: string }[]
    layout?: string
  }
}

type TextField = CommonFieldProps & {
  rows: number
}

export type Span = {
  _type: 'span'
  text: string
}

export type BlockField = {
  _type: 'block'
  styles: {
    title: string
    value: string
    blockEditor?: {
      render: ReactComponentLike
    }
    icon?: ReactComponentLike
  }[]
  children: (Field | Span)[]
}

type ArrayOf =
  | ObjectType
  | ReferenceField
  | ImageField
  | { type: string }
  | BlockField

export type ArrayField = CommonFieldProps & {
  name: string
  of: ArrayOf[]
}

type FilterFunctionResult = { filter: string; filterParams?: string }
type FilterFunction = (args: {
  document: { [key: string]: any }
  parentPath: string[]
  parent: Record<string, unknown>[]
}) => FilterFunctionResult
type ReferenceField = CommonFieldProps & {
  to: { type: string }[]
  options: {
    filter: string | FilterFunction
    filterParams?: { [key: string]: string }
  }
}

type ImageField = CommonFieldProps & {
  options?: {
    hotspot?: boolean
  }
}

export type Field =
  | CommonFieldProps
  | StringField
  | TextField
  | ArrayField
  | ReferenceField
  | ImageField
  | ObjectType
  | BlockField

type Preview = {
  select?: { [key: string]: string }
  prepare?: (selection: {
    [key: string]: any
  }) => { title?: string; subtitle?: string }
  component?: (props: PreviewProps) => ReactElement
}

type Fieldset = {
  name: string
  title: string
  options?: { collapsible: boolean; collapsed?: boolean }
}

export type ObjectType = {
  type: 'object'
  title?: string
  name: string
  fields: Field[]
  validation?: Validation
  preview?: Preview
  fieldsets?: Fieldset[]
  description?: string
  options?: { collapsible?: boolean; collapsed?: boolean }
}

export type Document = {
  type: 'document'
  name: string
  fields: Field[]
  title?: string
  validation?: Validation
  preview?: Preview
  fieldsets?: Fieldset[]
  initialValue?: { [key: string]: any }
  orderings?: {
    name: string
    title: string
    by: { field: string; direction: string }[]
  }[]
}

export type PreviewProps = {
  value: {
    [key: string]: any
  }
}

export type Body2TextProps = { children: React.FunctionComponent<any> }

export type IngredientPreview = {
  amount: string | number
  ingredient: string
  unit: string
}

export type StepPreview = { step: number }
