# Luarmor API Wrapper
```
npm i luarmor-api
```
# Example Code
```javascript
const API = new Luarmor('api_key', 'project_id');

API.Stats(true).then((data) => {
    console.log(data)
})
```