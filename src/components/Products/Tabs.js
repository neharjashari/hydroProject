import React from "react"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows"
import LaptopIcon from "@material-ui/icons/Laptop"
import SmartphoneIcon from "@material-ui/icons/Smartphone"
import TabletMacIcon from "@material-ui/icons/TabletMac"
import Products from "./Products"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: "100vw",
  },
})

export default function IconLabelTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
    // console.log("############################")
    // console.log(newValue)
  }

  return (
    <>
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab icon={<DesktopWindowsIcon />} label="DESKTOP" />
          <Tab icon={<LaptopIcon />} label="LAPTOP" />
          <Tab icon={<TabletMacIcon />} label="TABLET" />
          <Tab icon={<SmartphoneIcon />} label="SMARTPHONE" />
        </Tabs>
      </Paper>
      <Products category={value} />
    </>
  )
}
