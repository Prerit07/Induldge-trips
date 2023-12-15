import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        // variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, width: 450 }}
      >
        <Tab label="Hotels" {...a11yProps(0)} />
        <Tab label="Sightseeings" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Hotels Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
        accusamus neque repellat sed perferendis rerum commodi a maiores
        inventore laudantium! Architecto similique at facere cum distinctio
        maiores, optio numquam amet!
      </TabPanel>
      <TabPanel value={value} index={1}>
        Sightseeings Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Dignissimos, sunt dolorum. Minus, quos. Exercitationem provident natus
        aspernatur nesciunt delectus quae distinctio! Earum inventore ipsam
        alias veniam, excepturi distinctio laudantium fuga.
      </TabPanel>
    </Box>
  );
}
