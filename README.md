# vite-react-ts-linting

- use suspense

- user

  - profile
  - settings

- style auth pages
- check that login guest is working well

## after

- dashboard
- post

  - create
  - edit
  - delete
  - view

- businesses
- notifications
- sidebar
  - left
  - right

## eventually

- modal
  - scroll animation
  - backdrop color
- actual search
- actual theme
  - grey stuff
  - shadow
  - dark mode
- business accounts
- icon
- make phone number better (not just american numbers)

- best way to upload shit to npm and build for prod

## keep eye on

- user birthday (age) make sure good
- all forms involving email should be case insensitive/convert to lowercase

- removed from eslint settings:import/resolver: {"node": {
  "paths": ["src"],
  "extensions": [".js", ".jsx", ".ts", ".tsx"]
  }}

## possible improvements

- for edit profile -> implement featured

const fetchCurrentUser = async (): Promise<IUser | null> => {
const res = await fetch(`${apiBaseUrl}/auth/current-user`, {
method: "GET",
credentials: "include",
});
const json = await res.json();
if (!res.ok) throw json.message;

    const { isAuthenticated, user } = json;

    return isAuthenticated ? user : null;

};
// const { data, error, isLoading, isError, isSuccess } = useQuery({
// queryKey: ["currentUser"],
// queryFn: fetchCurrentUser,
// });
