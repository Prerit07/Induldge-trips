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
        <Box sx={{ p: 5 }}>
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
        <Tab label="Inclusion" {...a11yProps(2)} />
        <Tab label="Exclusion" {...a11yProps(3)} />
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
      <TabPanel value={value} index={2}>
        Inclusion Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloremque officiis repudiandae accusantium, blanditiis quaerat ea
        perspiciatis, ducimus architecto at ex deleniti cum dolorem sunt impedit
        quos. Reprehenderit nam delectus quae!
      </TabPanel>
      <TabPanel value={value} index={3}>
        Exclusion Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Natus molestias corrupti non, adipisci ullam beatae voluptas dolor.
        Voluptatibus repellat dolore, animi numquam facere non iure qui porro
        cum inventore voluptates.
      </TabPanel>
    </Box>
  );
}
