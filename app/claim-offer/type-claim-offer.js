// @flow

export const CLAIM_OFFER_STATUS = {
  IDLE: 'IDLE',
  RECEIVED: 'RECEIVED',
  SHOWN: 'SHOWN',
  ACCEPTED: 'ACCEPTED',
  IGNORED: 'IGNORED',
  REJECTED: 'REJECTED',
}

export const CLAIM_REQUEST_STATUS = {
  NONE: 'NONE',
  SENDING_CLAIM_REQUEST: 'SENDING_CLAIM_REQUEST',
  CLAIM_REQUEST_FAIL: 'CLAIM_REQUEST_FAIL',
  CLAIM_REQUEST_SUCCESS: 'CLAIM_REQUEST_SUCCESS',
}

export type ClaimOfferStatus = $Keys<typeof CLAIM_OFFER_STATUS>
export type ClaimRequestStatus = $Keys<typeof CLAIM_REQUEST_STATUS>

export type Attribute = {
  label: string,
  data: string,
  type?: string,
}

export type ClaimOfferPayload = {
  claimOffer: {
    name: string,
    version: string,
    revealedAttributes: Array<Attribute>,
  },
  issuer: {
    name: string,
    logoUrl: string,
    pairwiseDID: string,
  },
}

export const CLAIM_OFFER_RECEIVED = 'CLAIM_OFFER_RECEIVED'
export type ClaimOfferReceivedAction = {
  type: typeof CLAIM_OFFER_RECEIVED,
  payload: ClaimOfferPayload,
}

export const CLAIM_OFFER_SHOWN = 'CLAIM_OFFER_SHOWN'
export type ClaimOfferShownAction = {
  type: typeof CLAIM_OFFER_SHOWN,
}

export const CLAIM_OFFER_ACCEPTED = 'CLAIM_OFFER_ACCEPTED'
export type ClaimOfferAcceptedAction = {
  type: typeof CLAIM_OFFER_ACCEPTED,
}

export const CLAIM_OFFER_REJECTED = 'CLAIM_OFFER_REJECTED'
export type ClaimOfferRejectedAction = {
  type: typeof CLAIM_OFFER_REJECTED,
}

export const CLAIM_OFFER_IGNORED = 'CLAIM_OFFER_IGNORED'
export type ClaimOfferIgnoredAction = {
  type: typeof CLAIM_OFFER_IGNORED,
}

export const SEND_CLAIM_REQUEST = 'SEND_CLAIM_REQUEST'
export type SendClaimRequestAction = {
  type: typeof SEND_CLAIM_REQUEST,
}

export const CLAIM_REQUEST_SUCCESS = 'CLAIM_REQUEST_SUCCESS'
export type ClaimRequestSuccessAction = {
  type: typeof CLAIM_REQUEST_SUCCESS,
}

export const CLAIM_REQUEST_FAIL = 'CLAIM_REQUEST_FAIL'
export type ClaimRequestFailAction = {
  type: typeof CLAIM_REQUEST_FAIL,
}

export type ClaimOfferAction =
  | ClaimOfferReceivedAction
  | ClaimOfferShownAction
  | ClaimOfferAcceptedAction
  | ClaimOfferRejectedAction
  | SendClaimRequestAction
  | ClaimRequestSuccessAction
  | ClaimRequestFailAction

export type ClaimOfferStore = {
  status: ClaimOfferStatus,
  payload: ?ClaimOfferPayload,
  claimRequestStatus: ClaimRequestStatus,
}

export type ClaimRequestStatusModalProps = {
  claimRequestStatus: ClaimRequestStatus,
  payload: ClaimOfferPayload,
  onContinue: () => void,
}

export type ClaimRequestStatusModalState = {
  isVisible: boolean,
}
