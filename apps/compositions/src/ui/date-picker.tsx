"use client"

import { DatePicker as ChakraDatePicker, Portal } from "@chakra-ui/react"
import { getLocalTimeZone, today } from "@internationalized/date"
import * as React from "react"

interface DatePickerContentProps extends ChakraDatePicker.ContentProps {
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement | null>
}

export const DatePickerContent = React.forwardRef<
  HTMLDivElement,
  DatePickerContentProps
>(function DatePickerContent(props, ref) {
  const { portalled = true, portalRef, ...rest } = props
  return (
    <Portal disabled={!portalled} container={portalRef}>
      <ChakraDatePicker.Positioner>
        <ChakraDatePicker.Content ref={ref} {...rest} />
      </ChakraDatePicker.Positioner>
    </Portal>
  )
})

export const DatePickerRoot = React.forwardRef<
  HTMLDivElement,
  ChakraDatePicker.RootProps
>(function DatePickerRoot(props, ref) {
  // Fix: pass the user's local timezone so "today" highlight is based on
  // local date, not UTC. Without this, users in UTC+ zones see the wrong
  // day highlighted as "today" during early morning hours.
  const localTimeZone = getLocalTimeZone()
  return (
    <ChakraDatePicker.Root
      timeZone={localTimeZone}
      today={today(localTimeZone)}
      ref={ref}
      {...props}
    />
  )
})

export const DatePickerLabel = ChakraDatePicker.Label
export const DatePickerControl = ChakraDatePicker.Control
export const DatePickerTrigger = ChakraDatePicker.Trigger
export const DatePickerClearTrigger = ChakraDatePicker.ClearTrigger
export const DatePickerInput = ChakraDatePicker.Input
export const DatePickerRangeText = ChakraDatePicker.RangeText
export const DatePickerTable = ChakraDatePicker.Table
export const DatePickerTableHead = ChakraDatePicker.TableHead
export const DatePickerTableHeader = ChakraDatePicker.TableHeader
export const DatePickerTableBody = ChakraDatePicker.TableBody
export const DatePickerTableRow = ChakraDatePicker.TableRow
export const DatePickerTableCell = ChakraDatePicker.TableCell
export const DatePickerTableCellTrigger = ChakraDatePicker.TableCellTrigger
export const DatePickerViewControl = ChakraDatePicker.ViewControl
export const DatePickerView = ChakraDatePicker.View
export const DatePickerViewTrigger = ChakraDatePicker.ViewTrigger
export const DatePickerNextTrigger = ChakraDatePicker.NextTrigger
export const DatePickerPrevTrigger = ChakraDatePicker.PrevTrigger
export const DatePickerMonthSelect = ChakraDatePicker.MonthSelect
export const DatePickerYearSelect = ChakraDatePicker.YearSelect
export const DatePickerContext = ChakraDatePicker.Context
export const DatePickerRootProvider = ChakraDatePicker.RootProvider
