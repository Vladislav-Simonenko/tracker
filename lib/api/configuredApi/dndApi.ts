import { trackerSprilApi as api } from "../emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    authControllerRegister: build.mutation<
      AuthControllerRegisterApiResponse,
      AuthControllerRegisterApiArg
    >({
      query: (queryArg) => ({
        url: `/api/auth/register`,
        method: "POST",
        body: queryArg.registerUserDto,
      }),
    }),
    authControllerVerifyEmail: build.query<
      AuthControllerVerifyEmailApiResponse,
      AuthControllerVerifyEmailApiArg
    >({
      query: (queryArg) => ({
        url: `/api/auth/verify`,
        params: { token: queryArg.token },
      }),
    }),
    authControllerLogin: build.mutation<
      AuthControllerLoginApiResponse,
      AuthControllerLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/api/auth/login`,
        method: "POST",
        body: queryArg.loginUserDto,
      }),
    }),
    authControllerGetProfile: build.query<
      AuthControllerGetProfileApiResponse,
      AuthControllerGetProfileApiArg
    >({
      query: () => ({ url: `/api/auth/profile` }),
    }),
    authControllerForgotPassword: build.mutation<
      AuthControllerForgotPasswordApiResponse,
      AuthControllerForgotPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/api/auth/forgot-password`,
        method: "POST",
        body: queryArg.forgotPasswordDto,
      }),
    }),
    authControllerResetPassword: build.mutation<
      AuthControllerResetPasswordApiResponse,
      AuthControllerResetPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/api/auth/reset-password`,
        method: "POST",
        body: queryArg.resetPasswordDto,
      }),
    }),
    authControllerRefreshToken: build.mutation<
      AuthControllerRefreshTokenApiResponse,
      AuthControllerRefreshTokenApiArg
    >({
      query: (queryArg) => ({
        url: `/api/auth/refresh-token`,
        method: "POST",
        body: queryArg.refreshTokenDto,
      }),
    }),
    authControllerLogout: build.mutation<
      AuthControllerLogoutApiResponse,
      AuthControllerLogoutApiArg
    >({
      query: () => ({ url: `/api/auth/logout`, method: "POST" }),
    }),
    usersControllerCreate: build.mutation<
      UsersControllerCreateApiResponse,
      UsersControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users`,
        method: "POST",
        body: queryArg.createUserDto,
      }),
    }),
    usersControllerFindAll: build.query<
      UsersControllerFindAllApiResponse,
      UsersControllerFindAllApiArg
    >({
      query: () => ({ url: `/api/users` }),
    }),
    usersControllerFindOne: build.query<
      UsersControllerFindOneApiResponse,
      UsersControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/api/users/${queryArg.id}` }),
    }),
    usersControllerUpdate: build.mutation<
      UsersControllerUpdateApiResponse,
      UsersControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateUserDto,
      }),
    }),
    usersControllerRemove: build.mutation<
      UsersControllerRemoveApiResponse,
      UsersControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    usersControllerUpdateRole: build.mutation<
      UsersControllerUpdateRoleApiResponse,
      UsersControllerUpdateRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users/${queryArg.id}/switch-role`,
        method: "PATCH",
        body: queryArg.switchRoleDto,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as DnDApi };
export type AuthControllerRegisterApiResponse = unknown;
export type AuthControllerRegisterApiArg = {
  registerUserDto: RegisterUserDto;
};
export type AuthControllerVerifyEmailApiResponse = unknown;
export type AuthControllerVerifyEmailApiArg = {
  token: string;
};
export type AuthControllerLoginApiResponse = unknown;
export type AuthControllerLoginApiArg = {
  loginUserDto: LoginUserDto;
};
export type AuthControllerGetProfileApiResponse = unknown;
export type AuthControllerGetProfileApiArg = void;
export type AuthControllerForgotPasswordApiResponse = unknown;
export type AuthControllerForgotPasswordApiArg = {
  forgotPasswordDto: ForgotPasswordDto;
};
export type AuthControllerResetPasswordApiResponse = unknown;
export type AuthControllerResetPasswordApiArg = {
  resetPasswordDto: ResetPasswordDto;
};
export type AuthControllerRefreshTokenApiResponse = unknown;
export type AuthControllerRefreshTokenApiArg = {
  refreshTokenDto: RefreshTokenDto;
};
export type AuthControllerLogoutApiResponse = unknown;
export type AuthControllerLogoutApiArg = void;
export type UsersControllerCreateApiResponse = unknown;
export type UsersControllerCreateApiArg = {
  createUserDto: CreateUserDto;
};
export type UsersControllerFindAllApiResponse = unknown;
export type UsersControllerFindAllApiArg = void;
export type UsersControllerFindOneApiResponse = unknown;
export type UsersControllerFindOneApiArg = {
  id: number;
};
export type UsersControllerUpdateApiResponse = unknown;
export type UsersControllerUpdateApiArg = {
  id: number;
  updateUserDto: UpdateUserDto;
};
export type UsersControllerRemoveApiResponse = unknown;
export type UsersControllerRemoveApiArg = {
  id: number;
};
export type UsersControllerUpdateRoleApiResponse = unknown;
export type UsersControllerUpdateRoleApiArg = {
  id: number;
  switchRoleDto: SwitchRoleDto;
};
export type RegisterUserDto = {
  /** The email of the user */
  email: string;
  /** The password of the user */
  password: string;
  /** Password confirmation */
  confirmPassword: string;
  /** The login of the user */
  login: string;
};
export type LoginUserDto = {
  /** User email */
  email: string;
  /** User password */
  password: string;
};
export type ForgotPasswordDto = {
  /** User email */
  email: string;
};
export type ResetPasswordDto = {
  /** Password reset token */
  token: string;
  /** New password */
  newPassword: string;
};
export type RefreshTokenDto = {
  /** Refresh token */
  refreshToken: string;
};
export type CreateUserDto = {
  /** The email of the user */
  email: string;
  /** The password of the user */
  password: string;
  /** The login of the user */
  login: string;
  /** The role of the user */
  role: string;
  /** The fullname of the user */
  fullname: string;
};
export type UpdateUserDto = {
  /** The email of the user */
  email: string;
  /** The password of the user */
  password: string;
  /** The login of the user */
  login: string;
  /** The role of the user */
  role: string;
  /** The isVerified of the user */
  isVerified: boolean;
};
export type SwitchRoleDto = {
  /** The role of the user */
  role: string;
};
export const {
  useAuthControllerRegisterMutation,
  useAuthControllerVerifyEmailQuery,
  useAuthControllerLoginMutation,
  useAuthControllerGetProfileQuery,
  useAuthControllerForgotPasswordMutation,
  useAuthControllerResetPasswordMutation,
  useAuthControllerRefreshTokenMutation,
  useAuthControllerLogoutMutation,
  useUsersControllerCreateMutation,
  useUsersControllerFindAllQuery,
  useUsersControllerFindOneQuery,
  useUsersControllerUpdateMutation,
  useUsersControllerRemoveMutation,
  useUsersControllerUpdateRoleMutation,
} = injectedRtkApi;
