function ToggleButton({theme,setTheme}) {
    return ( 
        <button
         className = "btn btn-outline-secondary"
          onClick = {() => 
            setTheme(theme === "light"?"dark":"light")
            }
       
        >
        {theme === "light" ? "Dark Mode":"Light Mode"}

        </button>
    );
}

export default ToggleButton;