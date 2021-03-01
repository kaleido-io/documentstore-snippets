package io.kaleido.samples.documentstore;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;

public class Config {
    private static Config config;
    public static void initConfig(String filename) throws IOException {
        try (Reader configReader = new FileReader(new File(filename))) {
            ObjectMapper objectMapper = new ObjectMapper();
            config = objectMapper.readValue(configReader, Config.class);
        }
    }
    public static Config getConfig() {
        return config;
    }

    public String getApiEndpoint() {
        return apiEndpoint;
    }

    public AppCredentials getAppCredentials() {
        return appCredentials;
    }

    private String apiEndpoint;
    private AppCredentials appCredentials = new AppCredentials();
    public class AppCredentials {
        private String user;
        private String password;
        public AppCredentials() {
            user = "";
            password = "";
        }
        public String getUser() {
            return user;
        }

        public String getPassword() {
            return password;
        }
    }
}
