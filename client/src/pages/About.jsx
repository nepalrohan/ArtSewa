
const About = () => {
  return (
    <div className="mt-28 flex flex-col gap-5 p-5 ">
      <div >
<label className="text-2xl font-bold text-green-600 text-center">About Art Sewa</label>
<p>The error you're encountering typically occurs due to insufficient permissions for the user attempting to push to the repository. Here are a few steps to troubleshoot and resolve this issue:

Check Repository Permissions:

Ensure that the user nepalrohan has the necessary permissions to push to the repository rohannepo/testrepo.git.
Go to the repository settings on GitHub, navigate to the "Manage access" or "Collaborators & teams" section, and verify that nepalrohan is listed with the correct permissions (e.g., Write or Admin).It seems that the credential helper cache is not supported on your system, which might be causing the issue with clearing cached credentials. You can try the following steps to address the problem:

Remove the Credential Cache:

Since the cache helper is unavailable, you can use the wincred helper if you're on Windows:</p>
   
   
      </div>
    </div>
  )
}

export default About