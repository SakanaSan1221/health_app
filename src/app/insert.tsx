import React from "react";

const Insert = () => {
    return(
        <>
            <form>
                <div className="form-example">
                    <label htmlFor="name">Enter your name: </label>
                    <input type="text" name="name" id="name" required />
                </div>
            </form>
        </>
    )
}

export default Insert