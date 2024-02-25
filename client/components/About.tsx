import React from 'react'

export default function About() {
  return (
    <>
      <div className="Title">
        <h1>About the team</h1>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="Blurb">
              <p>
                This box will be the blurb for the about us page Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="Image">
              <img
                src="client/Public/Images/placeholder.jpeg"
                alt="Placeholder"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
