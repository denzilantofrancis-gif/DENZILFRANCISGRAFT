FROM mcr.microsoft.com/dotnet/aspnet:9.0

WORKDIR /usr/app

# Install wget, python3 + python3-dev and download GG
RUN mkdir -p /usr/app \
 && apt-get update \
 && apt-get install -y \
    wget \
    python3-dev \
 && wget -O /usr/app/gg.deb \
    https://github.com/grft-dev/graftcode-gateway/releases/latest/download/gg_linux_amd64.deb \
 && dpkg -i /usr/app/gg.deb \
 && rm /usr/app/gg.deb \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

COPY bin/Release/net8.0/publish/ /usr/app/

EXPOSE 80
EXPOSE 81

#CMD ["gg", "--modules", "/usr/app/DenzilCalculator.dll"]
CMD ["gg", "--projectKey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMTljM2RlMy1mOGZkLTdiZTAtOWE2Ny0zZDUxMDQyN2JkMDEiLCJnYXRld2F5X25hbWUiOiJzY2FyY2Utc291dGhlcm4tbGl2ZS1vYWsiLCJwaWQiOiIwMTljMzkzNS1iM2M5LTdlY2YtOWUyYi1lNDk5NjM1ZTU0NjAiLCJwcm9qZWN0X25hbWUiOiJtb2NrZWQteWVsbG93c3RvbmUiLCJpYXQiOjE3NzA1NjQ4NzYsIm5iZiI6MTc3MDU2NDg3NiwiZXhwIjoxNzg2MjAzMjc2LCJpc3MiOiJncmFmdGNvZGUtZ2F0ZXdheSIsImF1ZCI6ImdyYWZ0Y29kZS1hcGkifQ.uPbAbqh41NbkcCt9Qh3xbBTTuxsiCfEWKaz_4jGuQYM", "--modules", "/usr/app/DenzilCalculator.dll"]


