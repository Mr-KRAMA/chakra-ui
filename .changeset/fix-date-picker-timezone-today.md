---
"@chakra-ui/react": patch
---

fix(date-picker): use local timezone for today highlight

The `DatePickerRoot` snippet now passes `timeZone` and `today` derived from
`getLocalTimeZone()` (@internationalized/date) to the underlying Ark UI root.

Previously the zag-js machine defaulted `timeZone` to `"UTC"`, causing the
"today" highlight to show the wrong day for users in UTC+ timezones during early
morning hours (e.g. UTC+3 before 03:00 local time showed yesterday).
