# Section

This component is used to page sections and uses the Container component.

## Usage

```react
<Section
	className='your-class'
	hideContainer
	bgColor='primary'
	title='Section Title'
>
	//...
</Section>
```

## Props

| Prop            | Type                                                    | Description                                       | Default |
| --------------- | ------------------------------------------------------- | ------------------------------------------------- | ------- |
| `children`      | React.Node                                              | The content to be wrapped in the Section          | -       |
| `className`     | string                                                  | The class names to be added to the Section        | ''      |
| `hideContainer` | boolean                                                 | The container prop will be hidden in the Section  | false   |
| `bgColor`       | 'primary', 'secondary', 'tertiary', 'grey', 'greylight' | This will display the respective background color | -       |
| `title`         | string                                                  | Will display the default section title in an h2   | ''      |
