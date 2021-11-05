To pass value from child to parent thru props
In JavaScript, functions are just objects (i.e. regular values) and hence you can pass them as values via props to a component. If that component then calls that function, it executes - and that's how you can trigger a function defined in a parent component from inside a child component.

1. Add listener(onChangeYear) in parent custom component
2. Add a function (changeYearHandler(yearInput)) that takes in a param.
3. Assign this function to the listener
    onChangeYear={changeYearHandler}
4. In child, accept props param
5. Add onChange={changeYearChildHandler}
6. In changeYearChildHandler, accept (event) and call props.onChangeYear(event.target.value)

parent is the controlled component.
