import Api from '@/services/Api';

export default {
    ping (param) {
        return Api().get('ping', param);
    }
};
