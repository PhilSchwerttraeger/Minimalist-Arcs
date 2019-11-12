function Settings(props) {
  return (
    <Page>
        <Select
          label={"Theme"}
          settingsKey="theme"
          options={[
            {
              name: "Elegant Grey",
              id: "ElegantGrey"
            },
            {
              name: "Powerful Red",
              id: "PowerfulRed"
            },
            {
              name: "Matrix Green",
              id: "MatrixGreen"
            },
            {
              name: "Deep Blue",
              id: "DeepBlue"
            },
            {
              name: "Playful Pink",
              id: "PlayfulPink"
            },
            {
              name: "Plain White",
              id: "PlainWhite"
            },
          ]}
        />
      <Text>
        Tipp: Tab into the middle of the watch face to show/hide an additional digital clock
      </Text>
    </Page>
  );
}

registerSettingsPage(Settings);