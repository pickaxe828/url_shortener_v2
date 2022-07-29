# URL shortener v2
## Description
This is a simple, basic, serverless URL shortener's backend, made with [Deta](https://www.deta.sh/). </br>
You can use it on https://urly.deta.dev/ </br>

## API usage

### [POST] /create
Payload sending: 
```
{
  "uri": string
}
```
Receiving: 
```
{
    "key": string # The key of the URL
    "uri": string # The original, percent encoded URL
}
```

### [GET] /:key
Redirect to the saved url.

## Deploy
To deploy, you will need an account and project on [Deta](https://www.deta.sh/). </br>
Then, you can deploy the project to your own project by pressing this button: </br>
[![Deploy](https://button.deta.dev/1/svg)](https://go.deta.dev/deploy?repo=https://github.com/pickaxe828/url_shortener_v2) </br>
After filling the required options, you will be redirected to the Deta dashboard and you can get your own URL there. </br>

## Others
Frontend is planned to be made soon:tm:. </br>

In case you are curious, v1 is archived and written with Python and Deta.
It's not finished and currently deprecated.
[Repo](https://github.com/pickaxe828/url_shortener)