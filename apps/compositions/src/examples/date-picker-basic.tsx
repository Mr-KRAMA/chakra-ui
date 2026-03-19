import {
  DatePickerContent,
  DatePickerControl,
  DatePickerInput,
  DatePickerLabel,
  DatePickerNextTrigger,
  DatePickerPrevTrigger,
  DatePickerRangeText,
  DatePickerRoot,
  DatePickerTable,
  DatePickerTableBody,
  DatePickerTableCell,
  DatePickerTableCellTrigger,
  DatePickerTableHead,
  DatePickerTableHeader,
  DatePickerTableRow,
  DatePickerTrigger,
  DatePickerView,
  DatePickerViewControl,
  DatePickerViewTrigger,
} from "compositions/ui/date-picker"
import { LuCalendar, LuChevronLeft, LuChevronRight } from "react-icons/lu"

export const DatePickerBasic = () => {
  return (
    <DatePickerRoot>
      <DatePickerLabel>Date</DatePickerLabel>
      <DatePickerControl>
        <DatePickerInput />
        <DatePickerTrigger>
          <LuCalendar />
        </DatePickerTrigger>
      </DatePickerControl>
      <DatePickerContent>
        <DatePickerView view="day">
          <DatePickerViewControl>
            <DatePickerPrevTrigger>
              <LuChevronLeft />
            </DatePickerPrevTrigger>
            <DatePickerViewTrigger>
              <DatePickerRangeText />
            </DatePickerViewTrigger>
            <DatePickerNextTrigger>
              <LuChevronRight />
            </DatePickerNextTrigger>
          </DatePickerViewControl>
          <DatePickerTable>
            <DatePickerTableHead>
              <DatePickerTableRow>
                <DatePickerContext>
                  {(api) =>
                    api.weekDays.map((wd) => (
                      <DatePickerTableHeader key={wd.short}>
                        {wd.short}
                      </DatePickerTableHeader>
                    ))
                  }
                </DatePickerContext>
              </DatePickerTableRow>
            </DatePickerTableHead>
            <DatePickerTableBody>
              <DatePickerContext>
                {(api) =>
                  api.weeks.map((week, i) => (
                    <DatePickerTableRow key={i}>
                      {week.map((day, j) => (
                        <DatePickerTableCell key={j} value={day}>
                          <DatePickerTableCellTrigger>
                            {day.day}
                          </DatePickerTableCellTrigger>
                        </DatePickerTableCell>
                      ))}
                    </DatePickerTableRow>
                  ))
                }
              </DatePickerContext>
            </DatePickerTableBody>
          </DatePickerTable>
        </DatePickerView>
      </DatePickerContent>
    </DatePickerRoot>
  )
}
