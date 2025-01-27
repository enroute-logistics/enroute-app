import { useTheme, useMediaQuery } from '@mui/material'

type DeviceTypeHook = {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

const useDeviceType = (): DeviceTypeHook => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')) // Adjust breakpoint as needed
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return { isMobile, isTablet, isDesktop }
}

export default useDeviceType
