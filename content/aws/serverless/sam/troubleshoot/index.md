---
title: SAM Lambda troubleshoot - AWS
---
# AWS SAM Lambda troubleshoot

## SAM unable to connect endpoint URL
https://github.com/awslabs/aws-sam-cli/issues/102#issuecomment-326177151

```bash
sudo ifconfig lo0 alias 172.16.123.1
```

```javascript
AWS.config.update({
    endpoint: "http://172.16.123.1:8000"
});
```
