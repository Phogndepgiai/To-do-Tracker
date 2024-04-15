// useEffect(function, a state, variable to check)
// function will run only once, on component mount
useEffect(() => {
  console.log("did mount");
  // when this useEffect function returns it acts as unmounting like in a class component
  return () => {
    console.log("same unmounting");
  };
}, []);

// function will run whenever showDeleteAll changes
useEffect(() => {
  setShowNumberTask(showDeleteAll);
}, [showDeleteAll]);

// function will run on every render cycle(everytime a state or a variable changes)
useEffect(() => {
  if (props.listTaskData.length >= 2) {
    setShowDeleteAll(true);
  } else {
    setShowDeleteAll(false);
  }
});
