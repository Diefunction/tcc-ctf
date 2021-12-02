# Environment setup (Ubuntu)
## Requirments
* install docker engine.
* install docker-compose.

# Installation
Install git
```bash
sudo apt install git
```
Clone the repository
```bash
git clone https://github.com/Diefunction/tcc-ctf.git
```

Install Docker and docker-compose.
```bash
# Uninstall old versions
sudo apt-get remove docker docker-engine docker.io containerd runc
# Update apt package index
sudo apt update
# Allow apt to use repository over HTTPS
sudo apt install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
# X86_64 / amd64
echo \
    "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Update apt package index
sudo apt update

# Install the latest version of docker engine and containerd.
sudo apt-get install docker-ce docker-ce-cli containerd.io

# Download docker-compose version 1.29
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Apply executable permissions to the binary
sudo chmod +x /usr/local/bin/docker-compose

# Add user to docker group
sudo usermod -aG docker $(whoami)
```
